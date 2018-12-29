
export default function calculateOwedAmount (subtotal, total, tip, amount) {

	var tipPercent = tip * (10**-2)
	console.log(total/amount)
	console.log(subtotal)
	console.log(amount)

	var taxPercent = (total - subtotal) / subtotal
	console.log(taxPercent)
	console.log(amount*1)



	var owedAmount = ((amount) + (amount*taxPercent) + (amount*tipPercent) + 0.0)
	console.log(owedAmount)

	return (owedAmount).toFixed(2)

}