import React from 'react'
import { useQueryClient } from 'react-query'

const useInvaildDateQueries = () => {
    const querys = useQueryClient();
    const deleteQuery = (array) => {
        array?.forEach(element => {
            querys.invalidateQueries(element);
        });
    }
    return { deleteQuery }
}

export default useInvaildDateQueries

