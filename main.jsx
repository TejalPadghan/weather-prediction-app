import Button from '@mui/material/Button';
function App() {
    let handleClick = () => {
        console.log("button was clicked");
    }
    return (
        <>
            <h1>material UI Demo</h1>
            <Button variant="contained" onCLick={handleClick}> click me! </Button>
            <Button variant="contained" onCLick={handleClick} disabled> click me2! </Button>
        </>
    )
}