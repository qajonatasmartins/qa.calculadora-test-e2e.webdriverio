// import { $ } from '@wdio/globals'

class LoginPage {

    // public get inputUsername() { return $('#username') }

    public async logarNoYoutube(usuario: string, senha: string) {
        await driver.pause(5000)
    }
}

export default new LoginPage()
