import { useState, useReducer } from "react"
import { userReducer, initialUser } from "../reducers/userReducer"
import type { UserProfile } from "../interfaces/interfaceUserProfile"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const UserProfileComponent: React.FC = () => {
  const [user, dispatch] = useReducer(userReducer, initialUser)
  const [isEditing, setIsEditing] = useState(false)

  const handleProfileUpdate = (field: keyof UserProfile["personalInfo"], value: string) => {
    dispatch({ type: "UPDATE_PROFILE", payload: { [field]: value } })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-pink-100 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-12">
      <Card className="w-full max-w-lg bg-white/70 dark:bg-gray-900/50 backdrop-blur-md border border-gray-300 dark:border-gray-700 shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl">
        <CardHeader className="text-center border-b border-gray-200 dark:border-gray-700 pb-4">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            User Profile
            <ThemeToggle />
          </CardTitle>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage your personal information and activity stats
          </p>
        </CardHeader>

        <CardContent className="space-y-6 pt-6">
          <section>
            <h3 className="font-semibold mb-3 text-lg text-gray-800 dark:text-gray-200">
              Personal Information
            </h3>

            {isEditing ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={user.personalInfo.firstName}
                    onChange={(e) => handleProfileUpdate("firstName", e.target.value)}
                    placeholder="Enter your first name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={user.personalInfo.email}
                    onChange={(e) => handleProfileUpdate("email", e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            ) : (
              <div className="text-gray-700 dark:text-gray-300 space-y-2">
                <p>
                  <span className="font-medium">Name:</span>{" "}
                  {user.personalInfo.firstName} {user.personalInfo.lastName}
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  {user.personalInfo.email}
                </p>
              </div>
            )}
          </section>

          <section className="border-t border-gray-200 dark:border-gray-700 pt-5">
            <h3 className="font-semibold mb-3 text-lg text-gray-800 dark:text-gray-200">
              Statistics
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-gray-700 dark:text-gray-300">
                Login Count:{" "}
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  {user.stats.loginCount}
                </span>
              </p>
              <Button
                onClick={() => dispatch({ type: "INCREMENT_LOGIN_COUNT" })}
                variant="secondary"
              >
                Simulate Login
              </Button>
            </div>
          </section>
        </CardContent>

        {/* Footer */}
        <CardFooter className="flex justify-center gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
          {isEditing ? (
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setIsEditing(false)}>
              Save Changes
            </Button>
          ) : (
            <Button variant="default" onClick={() => setIsEditing(true)}>
              Edit Profile
            </Button>
          )}
          <Button
            variant="outline"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reset
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default UserProfileComponent
