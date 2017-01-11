$(document).ready(function () {
    var count = 0;

    $('[data-toggle="offcanvas"]').off().on('click', function () {
        $('.row-offcanvas').toggleClass('active');
    });

    $('#add-element-form').off().on('submit', function (event) {
        event.preventDefault();
        var inputType = $('#input-type').val();
        var inputName = $('#input-name').val();
        addElement(inputType, inputName);
        $('#message-on-empty').hide();
        count++;
        $('.row-offcanvas').addClass('active');
    });

    function addElement(inputType, inputName) {
        if (inputType === 'select') {
            $('#results').append(
                    '<form class="alert alert-info" id="layer-' + count + '">' +
                    '<p>Look, I\'m <strong>' + inputType + '</strong>!<br/>' +
                    '<select class="form-control input-lg"><option value="value">Big Select!</option></select>' +
                    'My name is <strong id="input-name-' + count + '">' + inputName + '</strong>.<br/>' +
                    '<input type"text" class="form-control input-sm" id="new-name-' + count + '" value="' + inputName + '" style="display: none" required />' +
                    '</p>' +
                    '<button type="button" class="btn btn-primary btn-xs" id="edit-' + count + '"><i class="glyphicon glyphicon-pencil"></i></button>' +
                    '<button type="submit" class="btn btn-success btn-xs" id="confirm-' + count + '" style="display: none"><i class="glyphicon glyphicon-ok"></i></button>' +
                    '<button type="button" class="btn btn-danger btn-xs" id="delete-' + count + '"><i class="glyphicon glyphicon-remove"></i></button>' +
                    '</form>'
                    );
        } else if (inputType === 'button') {
            $('#results').append(
                    '<form class="alert alert-info" id="layer-' + count + '">' +
                    '<p>Look, I\'m <strong>' + inputType + '</strong>!<br/>' +
                    '<button type="button" class="btn btn-default btn-lg btn-block">Big Button!</button>' +
                    'My name is <strong id="input-name-' + count + '">' + inputName + '</strong>.<br/>' +
                    '<input type"text" class="form-control input-sm" id="new-name-' + count + '" value="' + inputName + '" style="display: none" required />' +
                    '</p>' +
                    '<button type="button" class="btn btn-primary btn-xs" id="edit-' + count + '"><i class="glyphicon glyphicon-pencil"></i></button>' +
                    '<button type="submit" class="btn btn-success btn-xs" id="confirm-' + count + '" style="display: none"><i class="glyphicon glyphicon-ok"></i></button>' +
                    '<button type="button" class="btn btn-danger btn-xs" id="delete-' + count + '"><i class="glyphicon glyphicon-remove"></i></button>' +
                    '</form>'
                    );
        } else if (inputType === 'checkbox') {
            $('#results').append(
                    '<form class="alert alert-info" id="layer-' + count + '">' +
                    '<p>Look, I\'m <strong>' + inputType + '</strong>!<br/>' +
                    '<div class="checkbox"><label><input type="checkbox"> Big Checkbox!</label></div>' +
                    'My name is <strong id="input-name-' + count + '">' + inputName + '</strong>.<br/>' +
                    '<input type"text" class="form-control input-sm" id="new-name-' + count + '" value="' + inputName + '" style="display: none" required />' +
                    '</p>' +
                    '<button type="button" class="btn btn-primary btn-xs" id="edit-' + count + '"><i class="glyphicon glyphicon-pencil"></i></button>' +
                    '<button type="submit" class="btn btn-success btn-xs" id="confirm-' + count + '" style="display: none"><i class="glyphicon glyphicon-ok"></i></button>' +
                    '<button type="button" class="btn btn-danger btn-xs" id="delete-' + count + '"><i class="glyphicon glyphicon-remove"></i></button>' +
                    '</form>'
                    );
        }
        onLayerChange();
    }

    function onLayerChange() {
        $('[id^="edit-"]').off().on('click', function () {
            var index = $(this).attr('id').split('-');
            $(this).hide();
            $('[id^="confirm-' + index[1] + '"]').show();
            $('[id^="new-name-' + index[1] + '"]').show();
            $('form[id^="layer-' + index[1] + '"]').on('submit', function (event) {
                event.preventDefault();
                var newName = $('[id^="new-name-' + index[1] + '"]').val();
                $('[id^="input-name-' + index[1] + '"]').text(newName);
                $('[id^="confirm-' + index[1] + '"]').hide();
                $('[id^="new-name-' + index[1] + '"]').hide();
                $('[id^="edit-' + index[1] + '"]').show();
            });
        });
        $('[id^="delete-"]').off().on('click', function () {
            var index = $(this).attr('id').split('-');
            $('[id^="layer-' + index[1] + '"]').remove();
            if (!$('[id^="layer-"]').length) {
                $('#message-on-empty').show();
            }
        });
    }
});