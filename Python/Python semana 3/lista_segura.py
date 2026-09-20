def add_secury_item(list, item):          # Adiciona um item a uma cópia da lista, mantendo a lista original inalterada.
    new_list = list.copy()
    new_list.append(item)

    return new_list
