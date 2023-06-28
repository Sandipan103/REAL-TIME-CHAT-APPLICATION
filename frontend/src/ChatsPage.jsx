import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = ( props) =>
{
    const ChatsProps = useMultiChatLogic('fa959059-6fc8-4b4b-95ab-d762102d1a3c',
    props.user.username,
    props.user.secret)
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...ChatsProps}/>

            <MultiChatWindow {...ChatsProps}  style={{height: '100%'}}/>
        </div>
    )
}
export default ChatsPage