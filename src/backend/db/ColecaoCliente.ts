import firebase from "../config";
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {

    conversor = {
        toFirestore(cliente: Cliente){
            return {
                nome: cliente.getNome,
                idade: cliente.getIdade,
            }/* Converte uma classe para algo que vai ser persistido no firestore */
        },

        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions):Cliente{
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        } /* Vou rececber algo do firestore e vou converter pra minha classe */
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        /* Se o cliente id estiver setado quer dizer que eu vou alterar */
        if(cliente?.getId){
            await this.colecao().doc(cliente.getId).set(cliente)
            return cliente
        }else{
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data()
        }/* Neste else ele add um cliente que não esta setado */
    }

    async excluir(cliente: Cliente): Promise<void> {
        this.colecao().doc(cliente.getId).delete
    }

    async obterTodos(): Promise<Cliente[]>{
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao(){
        return firebase.firestore().collection('cliente').withConverter(this.conversor)
    }

}