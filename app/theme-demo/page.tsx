import ThemeDemo from "@/components/theme-demo"

export default function ThemeDemoPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--text-color)" }}>
            Theme System Demo
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted-color)" }}>
            This page demonstrates our dynamic theme system with multiple theme options beyond just light and dark mode.
          </p>
        </div>

        <ThemeDemo />

        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-color)" }}>
            How It Works
          </h2>
          <div className="space-y-4" style={{ color: "var(--text-color)" }}>
            <p>
              Our theme system uses CSS variables (custom properties) to define colors for different UI elements. These
              variables change values when the theme changes between different options.
            </p>
            <p>We offer several theme options:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Light/Dark:</strong> Standard light and dark themes
              </li>
              <li>
                <strong>Professional:</strong> Clean, professional appearance suitable for medical contexts
              </li>
              <li>
                <strong>Calm:</strong> Soothing blue tones that create a relaxing experience
              </li>
              <li>
                <strong>Vibrant:</strong> Energetic themes with bold colors for a more dynamic feel
              </li>
              <li>
                <strong>High Contrast:</strong> Maximum readability themes for improved accessibility
              </li>
              <li>
                <strong>Nature:</strong> Fresh green themes inspired by natural elements
              </li>
            </ul>
            <p>
              Tailwind CSS is configured to use these variables, allowing all components to automatically adapt to the
              current theme. The system also persists the user's theme preference in localStorage.
            </p>
            <p>Try selecting different themes using the palette button in the theme demo card!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
