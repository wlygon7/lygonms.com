import { PageLayout, SharedLayout } from "./cfg"
import * as Component from "./components"

// Add this import
import BlackHoleBanner from "./components/BlackHoleBanner"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    BlackHoleBanner(), // Add this line
    Component.PageTitle(),
    Component.Search(),
    Component.Darkmode(),
  ],
  footer: Component.Footer({
    links: {
      // TODO: links
    },
  }),
}
