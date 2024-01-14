import { $ } from '@wdio/globals'

export default class CalculadoraPage {

    variavelNumero: any
    // Mapeei o elemento com o resource id
    // get btnNumero2() { return $('android=new UiSelector().resourceId("com.google.android.calculator:id/digit_2")') }

    // Mapeei o elemento com accessibility id
    set btnNumero(numero) { this.variavelNumero = $(`~${numero}`) }
    get btnNumero() { return this.variavelNumero }

    get btnMais() { return $('~mais') }
    get btnIgual() { return $('~igual') }
    get lblResultadoFinal() { return $('android=new UiSelector().resourceId("com.google.android.calculator:id/result_final")') }

    public async cliqueBtnNumero(numeroDesejado: string) {
        this.btnNumero = numeroDesejado
        await this.btnNumero.click()
    }

    public async cliqueBtnMais() {
        await this.btnMais.click()
    }

    public async cliqueBtnIgual() {
        await this.btnIgual.click()
    }

    public async pegarOTextoDoCampoLblResultadoFinal() {
        return await this.lblResultadoFinal.getText()
    }

}
