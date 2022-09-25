
import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchUser = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}
const fetchChannel = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}
const RQDefented = ({ email }) => {
    const { data: user } = useQuery(['users', email], () => fetchUser(email))
    const channelId = user?.data.channelId

    const { data: coursesdata } = useQuery(['channel', channelId], () => fetchChannel(channelId), {
        enabled: !!channelId
    })

    return (
        <div>
            {coursesdata?.data?.courses.map(course => {
                return (
                    <div key={course}>
                        <p>{course}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default RQDefented;