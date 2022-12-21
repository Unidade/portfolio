import { createContext, useContext, useState } from 'react'

export const drawerContext = createContext<null | DrawerProviderReturnType>(
  null
)

type DrawerProviderReturnType = ReturnType<typeof useDrawerState>

function useDrawerState() {
  const [showDrawer, setShowDrawer] = useState(false)
  return {
    showDrawer,
    setShowDrawer,
  }
}

export default function DrawerProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <drawerContext.Provider value={useDrawerState()}>
      {children}
    </drawerContext.Provider>
  )
}

export const useDrawerContext = () => {
  const context = useContext(drawerContext)
  if (!context) {
    throw new Error('useDrawerContext must be used within a DrawerProvider')
  }
  return context
}
