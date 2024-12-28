import { View, Text } from 'react-native'
import React from 'react'
// import { useTheme } from '../../contexts/ThemeContext'
// import { createThemedStyles } from '../../styles/theme'
// import ProgramList from '../../components/ProgramList'
// import { usePrograms } from '../../hooks/usePrograms'
// import { Program, CustomProgram } from '../../types/program'

const Programs = () => {
  // const { isDarkMode } = useTheme() || { isDarkMode: false };
  // const styles = createThemedStyles(isDarkMode);
  // const { setSelectedProgram } = usePrograms();

  // const handleSelectProgram = (program: Program | CustomProgram) => {
  //   setSelectedProgram(program);
  // };

  return (
    <View >
        <Text>Programs</Text>
      {/* <ProgramList onSelectProgram={handleSelectProgram} /> */}
    </View>
  )
}

export default Programs