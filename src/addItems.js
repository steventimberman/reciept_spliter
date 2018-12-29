
export default function addItems(items, price){

	if (price) {
		items.push(price);
		return {items: items}
	}

}