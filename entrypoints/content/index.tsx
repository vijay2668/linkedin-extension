// entrypoints/example-ui.content/index.tsx
import ReactDOM from "react-dom/client";
import Content from "../features/content";

export default defineContentScript({
  matches: ["https://*/*", "http://*/*"],

  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      onMount: (container) => {
        // Create a root on the UI container and render a component
        const root = ReactDOM.createRoot(container);
        root.render(<Content />);
        return root;
      },
      onRemove: (root: any) => {
        // Unmount the root when the UI is removed
        root.unmount();
      }
    });

    // Call mount to add the UI to the DOM
    ui.mount();
  }
});
