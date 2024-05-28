import React from "react";

export function useTags() {
    const [value, setValue] = React.useState([{id: undefined, value: true}]);


    const handleChange = (id: string) => {
        const valueUpdated = value.map(item => {
            if (item.id === id) {
                item.value = !item.value
            }
            return item
        })
        setValue(valueUpdated)
    }

    return {value, handleChange, setValue}
}
