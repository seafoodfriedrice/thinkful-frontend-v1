$(document).ready(function() {
    var $itemField = $('#item-field');
    var $addItem = $('#add-btn');
    var $items = $('#items');

    function itemLength() {
        return $itemField.val().length >= 2;
    }

    $itemField.keydown(function(e) {
        if (e.keyCode == 13 && itemLength(e)) {
            clickAddItem(e);
        }
    });

    $addItem.click(function(e) {
        itemLength(e) && clickAddItem(e);
    });

    function clickAddItem(e) {
        var item = '<li><span class="item">' + $itemField.val() + '</span>' +
            '<span class="item-btn" style="display:none">x</span></li>';
        $items.append(item);
        $itemField.val('');
    }

    $items.on('click', '.item', function() {
        var item = $(this);
        var remove = item.parent().find('.item-btn').toggle();
        item.toggleClass('strikethrough');
    });
    $items.on('click', '.item-btn', function() {
        $(this).parent().remove();
    });
    /*
    $items.on('click', function(e) {
        var target = e.target;
        var item = $(target).parent("li");

        if (target.className.indexOf("item") !== -1) {
            item.toggleClass('strikethrough');
            item.find('.item-btn').toggle();
            console.log("item clicked.");
        } else if (target.className.indexOf("-btn") !== -1) {
            item.parent.remove();
            console.log("item-btn clicked.");
        }
    });
    */
});
