
class LoginPage {
    constructor(page) {
        this.page = page;
        this.userName_text = page.getByRole('textbox', { name: 'Username' })
        this.passWord_text = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: ' Login' })
    }

    async GotoUrl(url) {
        await this.page.goto(url);
    }

    async login(username, password) {
        await this.userName_text.fill(username);
        await this.passWord_text.fill(password);
        await this.login_button.click();
    }

}

export default LoginPage