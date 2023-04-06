import React, { useState } from 'react'
import { GoChecklist } from 'react-icons/go'
import { useQuery } from 'react-query'
import Logo from '../component/Logo'
import TodoList from '../component/TodoList'
import TodoPopup from '../component/TodoPopup'
import '../css/List.css'
import Lists from '../config/Api'
import useInvaildDateQueries from '../hooks/useInvaildDateQueries'
import { useParams } from 'react-router-dom'

const List = ({ userId }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const deleteQuery = useInvaildDateQueries();
    const goToPopup = () => {
        setModalOpen(true)
        deleteQuery.deleteQuery(['list']);
    }

    const token = localStorage.getItem("token") || ""

    const { isLoading, data, isError, isFetching } = useQuery(['lists', userId], ({ queryKey }) => Lists.postList(token, queryKey[1]), {

        onSuccess: (data) => {
            console.log(data)
        },
        cacheTime: 1000000,
        staleTime: 1000000,
        refetchOnMount: true,
        refetchOnWindowFocus: true
    })

    if (isLoading || isFetching) {
        return <div>Loading..//Spiner 삽입 예정</div>
    }

    if (isError) {
        return <div>ToDo List를 불러오지 못했습니다.</div>
    }




    return (
        <>
            {modalOpen && <TodoPopup setModalOpen={setModalOpen} />}
            <Logo />
            <div className='todo-wrap'>
                <div className='todo-logo-wrap'>
                    <h1>TODO-LIST</h1>
                    <div className='todo-logo-btn'>
                        <button onClick={goToPopup} className='todo-add-btn'>ADD</button>
                    </div>
                </div>
                <div className='todo-title-wrap'>
                    <GoChecklist className='title-icons' color='#fff' />
                    <span>MY TO-DO LIST</span>
                </div>
                {data.map((item) => (
                    <TodoList key={item.userId} />
                ))}
            </div>
        </>
    )
}

export default List
