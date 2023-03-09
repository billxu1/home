import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import Box from '@mui/material/Box';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box style={{ padding: '5em' }}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        This website
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>The progression</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This website began as a way for me to learn CSS and HTML. As time passed, I realised I needed to pick up JavaScript to make better websites. So I began a migration from raw HTML/CSS to ReactJS.
                        And here we are.
                        <br />
                        <br />
                        A link to the source code: https://github.com/billxu1/home
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>My data analytics discord bot.</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        It has a leaderboard!
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        It is a discord bot that creates a SQLite database.
                        <br />
                        <br />
                        The database keeps track of people when they send a message, and it scans the message for the words used. With this, we have a leaderboard of most active individuals and most used words.
                        <br />
                        <br />
                        I made it because my friends have a message considered an inside joke, so initally it would just keep track of how many times that word was used. I extended it to this because it seemed like an interesting challenge, and I've always wondered who are most active on what servers.
                    </Typography>
                </AccordionDetails>

            </Accordion>
        </Box>
    );
}