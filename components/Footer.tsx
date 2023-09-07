import { NextPage } from "next";
import { FaGithub, FaTwitter } from "react-icons/fa"

const Footer: NextPage = () => {
    return (
        <footer className="text-gray-600 bg-gray-100 body-font w-full">
            <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
                <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                    <span className="ml-3 text-xl">ProjectPlanner</span>
                </a>
                <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">© {new Date().getFullYear()} ProjectPlanner —
                    <a href="https://twitter.com/pushkaraj2007" className="ml-1 text-gray-600" rel="noopener noreferrer" target="_blank">Pushkaraj Kulkarni</a>
                </p>
                <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
                    <a href="mailto:contactpushkaraj@gmail.com" className="text-lg" target="_blank" rel="noopener noreferrer">
                        Send Feedback
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer