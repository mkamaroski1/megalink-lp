export function Hero() {
    return (
        <main className="bg-black flex min-h-screen flex-col lg:flex-row items-center justify-between p-32 mt-[-100px]">
        <div className="flex flex-1 flex-col items-start justify-center text-white lg:items-center">
          
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div
            className="absolute w-full h-full rounded-full opacity-50"
            style={{
              transform: "scale(0.8)",
              backgroundImage:
                "radial-gradient(ellipse at center, #01CF02 0%, transparent 70%, transparent 100%)",
            }}
          ></div>
        </div>
      </main>
    )
  }