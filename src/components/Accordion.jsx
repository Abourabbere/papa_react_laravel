import { ThemeIcon, Accordion } from '@mantine/core';
import { BarChart, History, KeyboardArrowDown } from '@mui/icons-material';

function AccordionComponent() {
  return (
    <Accordion disableIconRotation>
      <Accordion.Item
        label="Customization"
        icon={
          <ThemeIcon color="blue" variant="light">
            <KeyboardArrowDown size={14} />
          </ThemeIcon>
        }
      >
        Colors, fonts, shadows and many other parts are customizable to fit your design needs
      </Accordion.Item>

      <Accordion.Item
        label="Historique"
        icon={
          <ThemeIcon color="red" variant="light">
            <History size={14} />
          </ThemeIcon>
        }
      >
        Colors, fonts, shadows and many other parts are customizable to fit your design needs
      </Accordion.Item>

      <Accordion.Item
        label="Taux de donnees"
        icon={
          <ThemeIcon color="orange" variant="light">
            <BarChart size={14} />
          </ThemeIcon>
        }
      >
        Colors, fonts, shadows and many other parts are customizable to fit your design needs
      </Accordion.Item>

      {/* ...other <Accordion.Item /> */}
    </Accordion>
  )
}

export default AccordionComponent