$( document ).ready( function() {
    $(document).on('click', '.variety', function() {
        var sel = ($(this).closest('.product').attr('id') == 'msProduct')
            ? '#' + $(this).closest('.product').attr('id')
            : '#' + $(this).closest('.ms2_product').attr('id');
        var $this = $(sel + ' option:selected');
        var id = $this.val();
        var img = sel == '#msProduct'
            ? $this.data('varietyimg').replace('60x210', '105x400')
            : $this.data('varietyimg');
        var oldPrice = $this.data('varietyoldprice');
        var price = $this.data('varietyprice');
        var vNew = $this.data('varietynew');
        var popular = $this.data('varietypopular');
        var balances = $this.data('varietybalances');
        var weight = $this.text();
        var t = $(sel + ' .variety-title').text();
        var title = t.replace(/"/g, '');
        var url = $(sel + ' .variety-url').attr('href') != undefined
            ? $(sel + ' .variety-url').attr('href')
            : $this.data('varietyurl');
        
        $(sel + ' .variety-img').attr('src', img);
        $(sel + ' input[name=id').val(id);
        if (oldPrice) {
            $(sel + ' .variety-oldprice').text(oldPrice);
        } else {
            $(sel + ' .variety-oldprice').text('');
        }
        if (price) {
            $(sel + ' .variety-price').text(price);
        }
        if (vNew && sel == '#msProduct') {
            $(sel + ' #msGallery').append('<span class="ms-new variety-new">Новинка</span>');
            //return false;
        } else if (vNew) {
            $(sel).append('<span class="ms-new variety-new">Новинка</span>');
            //return false;
        } else {
            $(sel + ' .variety-new').remove();
        }
        if (popular && sel == '#msProduct') {
            $(sel + ' #msGallery').append('<span class="ms-popular variety-popular">Акция</span>');
            //return false;
        } else if (popular) {
            $(sel).append('<span class="ms-popular variety-popular">Акция</span>');
        } else {
            $(sel + ' .variety-popular').remove();
        }
        if (balances > 0) {
            $(sel + ' .variety-balances').html('<button class="btn btn-default add-btn" type="submit" name="ms2_action" value="cart/add"><img class="add-car" src="/assets/components/ruwines/img/add-car.png" width="23" height="13"/> Добавить</button>');
        } else {
            $(sel + ' .variety-balances').html('<button data-title="' + title + ' ' + weight + '" data-toggle="modal" data-target="#supply-modal" data-url="' + url + '" type="submit" class="btn btn-default add-btn supply-add">Сообщить о поступлении</button>');
        }
    });
});


