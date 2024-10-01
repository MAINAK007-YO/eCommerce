export function showToast(operation, id){
    const toast = document.createElement("div");
    toast.classList.add("toast");

    if(operation === "add"){
        toast.textContent = `Product with ID ${id} added to cart`;
    } else {
        toast.textContent = `Product with ID ${id} removed from cart`;
    }
    
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}