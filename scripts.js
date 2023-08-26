$(document).ready(function() {
    const $formAdd = $('#formAdd');
    const $listAdd = $('#listAdd');
    const $entrAdd = $('#entrAdd');

    $formAdd.on('submit', function(event) {
        event.preventDefault();

        const tarefaTexto = $entrAdd.val().trim();

        if (tarefaTexto !== '') {
            const $novaTarefa = $('<li>').text(tarefaTexto);
            $listAdd.append($novaTarefa);
            $entrAdd.val('');
        }
    });

    $listAdd.on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });
});

