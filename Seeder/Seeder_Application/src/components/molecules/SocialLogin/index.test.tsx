import { ThemeProvider } from "@mui/material";
import { SocialLogin } from "./index";
import iconPath from "../../../utils/Constants";
import theme from "../../../theme";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';



describe('<SocialLogin />', () => {

    it('should render with default '), () => {
        render(
            <ThemeProvider theme={theme}>
                <SocialLogin src={iconPath.google} alt="google icon" variant="body1" children="Sign in" id="socialLogin"/>
            </ThemeProvider>
        );

        const socialLoginElement = screen.getByTestId('socialLogin');
        expect(socialLoginElement).toBeInTheDocument();
        expect(socialLoginElement).toHaveAttribute('src', iconPath.google);
        expect(socialLoginElement).toHaveAttribute('alt', 'Google Icon');
        expect(socialLoginElement).toHaveTextContent('Sign in');

    }
});