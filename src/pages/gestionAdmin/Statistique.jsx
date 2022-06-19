import { Group, Title } from '@mantine/core'
import React from 'react'
import { Stats } from '../../components/Stats'

function Statistique() {
  return (
    <div>
      <Stats />

      {/* Chart */}
      <Group ml="md"  spacing={20}>
        <Title order={3} >
          La suite apres
        </Title>
      </Group>
    </div>
  )
}

export default Statistique