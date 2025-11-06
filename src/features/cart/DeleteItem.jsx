import Button from "../../ui/Button";

function DeleteItem({  setIsShowPopUp }) {
    function handleDelete() {
        console.log("delete clicked");
        setIsShowPopUp(true);
    }

    return (
        <Button onClick={handleDelete} type="delete">
            {" "}
            Delete
        </Button>
    );
}

export default DeleteItem;
