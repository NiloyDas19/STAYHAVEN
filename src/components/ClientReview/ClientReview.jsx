import { useEffect, useState } from 'react';
import DocumentTitle from './../../documentTitle/DocumentTitle';
import Client from '../Client/Client';

const ClientReview = () => {
    DocumentTitle('Client Review');
    const [clients, setClients] = useState([]);
    useEffect(() => {
        fetch('client-review.json')
            .then(res => res.json())
            .then(data => setClients(data))
    }, []);

    console.log(clients);

    return (
        <div className='mx-auto px-5'>
            <div className='mx-auto p-5 space-y-10 border-2 rounded-2xl'>
                <div className='text-center space-y-4'>
                    <h2 className="text-5xl font-bold">Review from real client</h2>
                    <div className='border-2 border-dashed'></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        clients.map(client => <Client key={client.id} client={client}></Client>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ClientReview;