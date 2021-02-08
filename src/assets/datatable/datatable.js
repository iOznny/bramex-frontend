$(document).ready(function() {
  miDataTable();
} );

function miDataTable() {
    const tabla = document.querySelector('#miTabla');
    if(tabla != null){
      $('#miTabla').DataTable({
        "scrollX": true,
        "language": {
          "emptyTable":	"<i>No existen registros disponibles.</i>",
          "info": "Del _START_ al _END_ de _TOTAL_ ",
          "infoEmpty": "Mostrando 0 de 0 ",
          "infoFiltered": " filtros de un total de _MAX_ ",
          "infoPostFix": " registros.",
          "lengthMenu": "Mostrar _MENU_ registros",
          "loadingRecords": "Cargando...",
          "processing": "Procesando...",
          "search": "",
          "searchPlaceholder": "Realizar busqueda",
          "zeroRecords": "No se han encontrado coincidencias.",
          "paginate": {
            "first": "Primera",
            "last": "Última",
            "next": "Siguiente",
            "previous": "Anterior"
        },
        "aria": {
          "sortAscending": "Ordenación ascendente",
          "sortDescending":	"Ordenación descendente"
        }
      },
  
      "lengthMenu":		[[10, 15, 20, 25, 30, -1], [10, 15, 20, 25, 30, "Todos"]],
      "iDisplayLength":	10,
      });
    }    
}
