import React from 'react';
import { useForm } from 'react-hook-form'
import Surface from '#components/shared/CoreUI/Surface'
import Tabs from '#components/shared/CoreUI/Tabs'
import Tab from '#components/shared/CoreUI/Tabs/TabList/Tab';


/*
  - A div as container
  - A header at top
  - Make an unordered list
  - Each list item is a button 
*/


const AnimalQuery = ({ onChangeToAnimalDisplay: pushChangeToAnimalDisplay }) => {
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = () => {
    pushChangeToAnimalDisplay();
    reset();
  };

  return (
    <Surface rounded>
      <Tabs>
        <Tab />
        <Tab />
        <Tab />
        <Tab />
      </Tabs>
    </Surface>
  );
};

export default AnimalQuery;
