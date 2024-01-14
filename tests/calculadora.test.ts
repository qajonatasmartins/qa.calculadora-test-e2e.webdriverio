import CalculadoraPage from "../screen/calculadora.page"

describe('Calculadora', function () {

    it('Somar 2 + 2', async function () {
        // Triple A
        // Arrange (Preparação)
        const somaDoisValores = {
            primeiroValor: '2',
            segundoValor: '2',
            resultado: '4'
        }
        const calculadoraPage = new CalculadoraPage()
        // Act (Ação)
        await calculadoraPage.cliqueBtnNumero(somaDoisValores.primeiroValor)
        await calculadoraPage.cliqueBtnMais()
        await calculadoraPage.cliqueBtnNumero(somaDoisValores.segundoValor)
        await calculadoraPage.cliqueBtnIgual()

        // Assert (asserção ou validação/verificação)
        expect(await calculadoraPage.pegarOTextoDoCampoLblResultadoFinal()).toHaveTextContaining(somaDoisValores.resultado)
    })
})