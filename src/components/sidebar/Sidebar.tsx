import { Image } from "@chakra-ui/react";
import Logo from "../../assets/logo.svg";
import ChevronLeft from "../../assets/icons/ChevronLeft.svg";
import Menu from "./menu/Menu";
import { useSidebar } from "../../context/SidebarContext";
import { 
  SidebarBox, 
  CloseIcon, 
  LogoText, 
  ImageContainer, 
  LogoImageContainer, 
  CloseIconContainer, 
  CloseIconGridItem, 
  HeaderContainer
} from "./Sidebar.css";

const Sidebar: React.FC = () => {
  const { isCollapsed, toggleCollapse } = useSidebar();

  return (
    <SidebarBox isCollapsed={isCollapsed}>
      {/* Header */}
      <HeaderContainer>
        {!isCollapsed && (
          <LogoImageContainer>
            <ImageContainer>
              <Image src={Logo} alt="Logo"/>
            </ImageContainer>
            {
              !isCollapsed && (
                <LogoText 
                  textStyle="h4" 
                >
                  FitTrack
                </LogoText>
              )
            }
          </LogoImageContainer>
        )}
        <CloseIconContainer>
          <CloseIconGridItem>
            <CloseIcon 
              aria-label="Logo" 
              onClick={toggleCollapse}
            >
              <Image 
                src={ChevronLeft} 
                alt="ChevronLeft"
                style={{
                  transition: 'transform 0.7s',
                  transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </CloseIcon>
          </CloseIconGridItem>
        </CloseIconContainer>
      </HeaderContainer>
      {/* Menu */}
      <Menu />
    </SidebarBox>
  );
}

export default Sidebar;