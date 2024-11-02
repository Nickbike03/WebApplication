// Evento click sul pulsante "Aggiungi un nuovo libro"
document.getElementById("addTrophButton").addEventListener("click", function() {
    // Mostra il form per aggiungere un nuovo trofeo impostando "display: block"
    document.getElementById("trophForm").style.display = "block";
    // nascondi il form per rimuovere il libro
    document.getElementById("removeTrophForm").style.display = "none";
});

// Evento submit sul form "newTrophForm"
document.getElementById("newTrophForm").addEventListener("submit", function(event) {
    // Impedisce il comportamento di submit predefinito (invio dei dati)
    event.preventDefault();

    // Recupera i valori inseriti dall'utente nei campi del form
    const title = document.getElementById("titolo").value;
    const year = document.getElementById("anno").value;
    const publisher = document.getElementById("nazione").value;

    // Riferimento alla tabella dove verranno aggiunti i nuovi libri
    const tableBody = document.getElementById("trophTable").getElementsByTagName('tbody')[0];


    addNewRowV1(tableBody , title , year , publisher);

//    addNewRowV2(tableBody , title , year , publisher);



    // Nasconde il form di aggiunta libro dopo l'inserimento
    document.getElementById("trophForm").style.display = "none";
    // Reset dei campi del form per future aggiunte
    document.getElementById("newTrophForm").reset();



});


function addNewRowV1(tableBody , titolo, anno, nazione){

    // Crea una stringa HTML per la nuova riga
    const newRowHTML = `
        <tr>
            <td>${titolo}</td>
            <td>${anno}</td>
            <td>${nazione}</td>
            <td><button class="btn btn-danger btn-sm deleteButton"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    `;

    // Aggiunge la nuova riga alla tabella usando innerHTML
    tableBody.innerHTML += newRowHTML;

}



