
const NotificationMenu = (props) => {
  const truncatePseudo = (pseudo) => {
      return pseudo.length > 10 ? pseudo.slice(0, 10) + '...' : pseudo;
    };

  const  handleOnClick = (indexToRemove,type) => {
    if (type) {
        console.log("yes")
    }
    props.setFriendsToAdd(prevFriends => {
        return prevFriends.filter((friend, index) => index !== indexToRemove);
    });
    props.updateCount();
 }   
return props.isClicked ? (
  props.friendsToAdd.length > 0 && (
    <div id="notif" className="fixed flex flex-col justify-center items-center  px-2 py-2 bg-gray-950  bg-opacity-55 rounded-lg max-h-[80vh] overflow-y-auto">
      {props.friendsToAdd.map((friend, index) => (  
      <div key={index}  title={friend} className=" flex justify-between items-center w-[348px] bg-[#2e2a2a] p-3 mb-2 rounded-lg bg-opacity-90 ">
        <p className="mr-5 font-semibold text-white ">Demande d'amis de : {truncatePseudo(friend)}</p>
        <div className="flex space-x-2 ">
          <button className="bg-green-500 text-white px-3 py-1  rounded-lg" onClick={() => handleOnClick(index,true)}>Ajouter</button>
          <button className="bg-red-500 text-white px-3 py-1 rounded-lg" onClick={() => handleOnClick(index,false)}>Ignorer</button>
        </div>
      </div>
  ))}
  </div> )
) : null
}

export default NotificationMenu;