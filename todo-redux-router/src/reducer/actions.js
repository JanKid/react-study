export const ADD_ITEM = 'ADD_ITEM'
export const DEL_ITEM = 'DEL_ITEM'
export const TOGGLE_ITEM ='TOGGLE_ITEM'
export const FILTER_ITEMS = 'FILTER_ITEMS'

export const filterTypes = {
	SHOW_ALL:'SHOW_ALL',
	SHOW_COMPLETED:'SHOW_COMPLETED',
	SHOW_UNCOMPLETED:'SHOW_UNCOMPLETED'
};

export function addItem(text) {
	return {
		type:ADD_ITEM,
		text
	}
}
export function delItem(id) {
	return {
		type:DEL_ITEM,
		id
	}
}

export function toggleItem(id) {
	return {
		type:TOGGLE_ITEM,
		id
	}
}

export function setFilterItems (filter) {
	return {
		type:FILTER_ITEMS,
		filter
	}
}
