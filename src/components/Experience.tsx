import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Button, Divider} from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Experience() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
     <>


         <Card sx={{ maxWidth: "100%" }}>
             <CardHeader
                 avatar={
                     <Avatar aria-label="recipe">
                         R
                     </Avatar>
                 }

                 title="Graphic Designer"
                 subheader="Dripple INC 14,05,2023"
             />
             <CardMedia
                 component="img"
                 height="250"
                 width="100%"
                 image="https://media.geeksforgeeks.org/wp-content/uploads/20230216170349/What-is-an-API.png"
                 alt="Paella dish"
             />
             <CardContent>
                 <Typography variant="body2" color="text.secondary">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, delectus dicta dignissimos dolorem doloribus eaque exercitationem harum illo laborum magnam molestias nobis nulla provident quam sed sit sunt. Odio, veritatis?
                 </Typography>
             </CardContent>

         </Card>

<Divider sx={{m:3}}/>
         <Card sx={{ maxWidth: "100%" }}>
             <CardHeader
                 avatar={
                     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                         R
                     </Avatar>
                 }

                 title="Graphic Designer"
                 subheader="Dripple INC 14,05,2023"
             />

             <CardContent>
                 <Typography variant="body2" color="text.secondary">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, delectus dicta dignissimos dolorem doloribus eaque exercitationem harum illo laborum magnam molestias nobis nulla provident quam sed sit sunt. Odio, veritatis?
                 </Typography>
             </CardContent>

         </Card>
     </>
    );
}