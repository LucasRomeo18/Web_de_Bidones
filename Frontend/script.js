document.getElementById('data').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtén los valores del formulario
    const name = document.getElementById('name').value;
    const pago = document.getElementById('pago').value;

    // Crea una nueva fila
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${name}</td><td>${pago}</td>`;

    // Agrega la nueva fila al inicio del tbody
    const tbody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    tbody.insertBefore(newRow, tbody.firstChild);

    // Limita el número de filas a 10
    const rows = tbody.getElementsByTagName('tr');
    if (rows.length > 10) {
        tbody.removeChild(rows[rows.length - 1]);
    }

    // Limpia el formulario
    document.getElementById('dataForm').reset();
});