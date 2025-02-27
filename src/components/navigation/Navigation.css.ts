import { StepTitle, Stepper } from "@chakra-ui/react"
import styled from "styled-components"

export const NavigationContainer = styled(Stepper)`
  width: fit-content;
`
export const StepText = styled(StepTitle)<{isActive: boolean}>`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme, isActive }) => isActive ? theme.colors.neutral[600] : theme.colors.neutral[300]};
`