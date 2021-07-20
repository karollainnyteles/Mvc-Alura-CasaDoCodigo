class Carrinho {
    clickIncremento(btn) {
        let data = this.getData(btn);
        data.Quantidade++;
        this.postData(data);

    }
    clickDecremento(btn) {
        let data = this.getData(btn);
        data.Quantidade--;
        this.postData(data);
    }

    updateQuantidade(input) {
        let data = this.getData(input);
       
        this.postData(data);
    }

    getData(elemento) {
        var linhaDoItem = $(elemento).parents('[item-id]');
        var itemId = $(linhaDoItem).attr('item-id');
        var novaQtde = $(linhaDoItem).find('input').val();

        return {
            Id: itemId,
            Quantidade: novaQtde
        };
    }

    postData(data) {
        $.ajax({
            url: '/pedido/updatequantidade',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data)
        });
    }
}

var carrinho = new Carrinho();