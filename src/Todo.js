import './Todo';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Todo = ({description, deleteTodo}) => {
    const handleClick = () => {
        deleteTodo();
    };
    
    return (
        <Box sx={{width: '50%', bgcolor: '#322b2b', border: '1px solid white', margin: 'auto'}}>
            <ListItem>
                <ListItemText sx={{color: 'white'}} primary={description}></ListItemText>
                <IconButton aria-label="button" onClick={handleClick}>
                    <DeleteOutlinedIcon name="delete" sx={{color: 'white'}}/>
                </IconButton>
            </ListItem>
        </Box>
    );
};

export default Todo;