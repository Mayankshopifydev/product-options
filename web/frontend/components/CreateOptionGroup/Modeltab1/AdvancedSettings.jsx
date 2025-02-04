import { Checkbox, FormLayout, TextField,TextContainer, Select, DatePicker,Stack, Icon, Card, Popover } from '@shopify/polaris'
import {useState, useCallback} from 'react';
import { CalendarMajor } from '@shopify/polaris-icons';
export default function AdvancedSettings() {

  const [selected, setSelected] = useState('YYY-MM-DD hh:mm:ss');
  const [selectedMindate, setSelectedMindate] = useState('today');

  const [checked, setChecked] = useState(false);
  const handleChangebox = useCallback(
    (newChecked) => setChecked(newChecked),
    [],
  );

  const handleSelectChange = useCallback(
    (value) => setSelected(value),
    [],
  );
  const handleSelectChangeMin = useCallback(
    (value) => setSelectedMindate(value),
    [],
  );
  const [{ month, year }, setDate] = useState({ month: 5, year: 2023 });
  const [selectedDate, setSelectedDate] = useState(new Date(2023, 4, 23));
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(() => setPopoverActive((popoverActive) => !popoverActive), []);
  const handleDateChange = useCallback((newValue) => setSelectedDate(newValue.start), []);

  const activator = (
    <TextField
      label="Blackout Dates"
      prefix={<Icon source={CalendarMajor} />}
      value={selectedDate.toISOString().slice(0, 10)}
      onFocus={togglePopoverActive}
      autoComplete="off"
    />
  );

  const activatorMaxDate = (
    <TextField
      label="Max Date"
      prefix={<Icon source={CalendarMajor} />}
      value={selectedDate.toISOString().slice(0, 10)}
      onFocus={togglePopoverActive}
      autoComplete="off"
    />
  );

  const options = [
    {label: 'YYYY-MM-DD hh:mm:ss', value: 'YYY-MM-DD hh:mm:ss'},
    {label: 'YYYY-MM-DD', value: 'YYYY-MM-DD'},
    {label: 'YYYY-MM', value: 'YYYY-MM'},
    {label: 'YYYY', value: 'YYYY'},
    {label: 'hh:mm:ss', value: 'hh:mm:ss'},
    {label: 'DD-MM-YYYY', value: 'DD-MM-YYYY'},
    {label: 'MM-DD-YYYY', value: 'MM-DD-YYYY'}
  ];

 const mindatecost = [
    {label: 'No min date', value: 'No-min-date'},
    {label: `Today's date`, value: 'todaydate'},
 ];


  return (
    <TextContainer>
    <FormLayout>
    <FormLayout.Group>    
      <Checkbox
      label="Hide the Label"
      checked={checked}
      onChange={handleChangebox}
      />
    </FormLayout.Group>

      <FormLayout.Group>
      <Select
      label="Date range"
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />
   <Popover
        active={popoverActive}
        activator={activator}
        onClose={togglePopoverActive}
        preferredAlignment="left"
        fullWidth
      >
        <DatePicker
          month={month}
          year={year}
          onChange={handleDateChange}
          onMonthChange={setDate}
          selected={selectedDate}
          allowRange={false}
        />
      </Popover>
      </FormLayout.Group>
      <Select
      label="Min Date Type"
      options={mindatecost}
      onChange={handleSelectChangeMin}
      value={selectedMindate}
    />
      <FormLayout.Group className="center-align">
      <Select
        label="Max Date Type"
        options={options}
        onChange={handleSelectChangeMin}
        value={selected}
      />
         <Popover
        active={popoverActive}
        activator={activatorMaxDate}
        onClose={togglePopoverActive}
        preferredAlignment="left"
        fullWidth
      >
        <DatePicker
          month={month}
          year={year}
          onChange={handleDateChange}
          onMonthChange={setDate}
          selected={selectedDate}
          allowRange={false}
        />
      </Popover>
      </FormLayout.Group>
      <FormLayout.Group>
    <Select
      label="Default Value"
      placeholder='No Defualt'
      />        
      <TextField
      label="Placeholder Text"
      value=""
      />
      </FormLayout.Group>
    </FormLayout>
  </TextContainer>
  )
}
