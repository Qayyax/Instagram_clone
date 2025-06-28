import { Tabs } from "expo-router";

export default function PrimaryTablayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="post" />
      <Tabs.Screen name="reels" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="profile" />
    </Tabs>
  )
}
