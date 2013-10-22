$(document).ready(function() {
    var $itemField = $('#item-field');
    var $addItem = $('#add-btn');
    $itemField.keydown(function(e) {
        if (e.keyCode == 13) {
            clickAddItem(e);
        }
    });
    $addItem.click(clickAddItem);
    function clickAddItem(e) {
        var $items = $('#items');
        var item = '<li><span class="item">' + $itemField.val() + '</span></li>';
        $items.append(item);
        $itemField.val('');
    }
    $('#items').on('click', 'li', function() {
        var item = $(this).find('.item');
        item.toggleClass('strikethrough');
    });
});
