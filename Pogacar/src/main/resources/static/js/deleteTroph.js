// DELETE ROW ON DEMAND
document.getElementById("removeTrophButton").addEventListener("click", function() {
    document.getElementById("removeTrophForm").style.display = "block";
    document.getElementById("trophForm").style.display = "none";
});

// Funzione per rimuovere il libro in base al numero
function removeTrophByNumber(event) {
    event.preventDefault(); // Impedisce il submit del form

    // Recupera il numero del libro da rimuovere
    const trophNumber = parseInt(document.getElementById("trophNumber").value);

    // Ottiene tutte le righe della tabella, escluse le intestazioni
    const rows =document.getElementById('trophTable').querySelectorAll('tr');

    // Controlla se il numero è valido
    if (trophNumber > 0 && trophNumber <= rows.length) {
        rows[trophNumber - 1].remove(); // Rimuove la riga corrispondente (indice base 0)
        document.getElementById("removeTrophForm").style.display = "none"; // Nasconde il form
        document.getElementById("removeTrophByNumberForm").reset(); // Resetta il campo del form
    } else {
        alert("Numero trofeo non valido!"); // Avviso per numero non valido
    }
}



// DELETE specific row
// Aggiunge la funzionalità di eliminazione per i pulsanti "Elimina" già presenti
document.querySelectorAll(".deleteButton").forEach(button => {
    button.addEventListener("click", function() {
        const row = button.closest("tr");
        row.parentNode.removeChild(row); // Elimina la riga
    });
});


// Funzione per eliminare la riga con opzioni diverse
function deleteRow(button) {
    const row = button.parentNode.parentNode; // Trova la riga corrente

    // Opzione 1: Rimuove la riga direttamente
    row.parentNode.removeChild(row);

}
