// Lista de Contatos
const contacts = [

{ name: "Alice Duarte", phone: "38 99212-9854"},
{ name: "Ismael Rodrigues", phone: "31 9925-9854"},
{ name: "Daniel Gomes", phone: "34 99212-8554"},
{ name: "Maycon Petro", phone: "17 99212-9854"},
{ name: "Patricia Fael", phone: "11 99212-8754"},
{ name: "Cristiana Amaral", phone: "87 98714-9854"},
{ name: "Maya Cristina", phone: "78 98748-9858"},
{ name: "Flavio Marcine Duarte", phone: "96 99212-9854"},
];

// Obtendo referencias aos elementos HTML

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const resultDiv = document.getElementById("result");

// Adicionando um ouvinte de evento para o botão de busca

searchButton.addEventListener("click" , () => {
    // Convertendo o termo de pesquisa e convertendo para minusculas
    const searchTerm = searchInput.value.toLowerCase();
let foundContact = null;

//Procurando o contato na lista

for (let i = 0; i<contacts.length; i++) {
    const contact = contacts[i];
    if (contact.name.toLowerCase().includes(searchTerm)) {
        foundContact = contact;
        break; //Encontrou o contato, pode parar de procurar
    }
}

// Exibindo o resultado ou mensagem de "contao não encontrado"
if (foundContact) {
    resultDiv.textContent = `Contato encontrado: ${foundContact.name}, ${foundContact.phone}`;

}else {
    resultDiv.textContent = "Contato não encontrado.";
}
});