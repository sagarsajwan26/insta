import React from 'react'
import { Link } from 'react-router'

const icons = {
  user: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500 group-hover:text-primary transition-colors"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.121 17.804A7 7 0 0112 15a7 7 0 016.879 2.804M12 12a5 5 0 100-10 5 5 0 000 10z"
      />
    </svg>
  ),
  shieldLock: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500 group-hover:text-primary transition-colors"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 11c.667 0 1-.333 1-1s-.333-1-1-1-1 .333-1 1 .333 1 1 1z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11V8M12 11L8 14M12 11l4 6" />
    </svg>
  ),
  advertisement: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500 group-hover:text-primary transition-colors"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <rect x="3" y="7" width="18" height="10" rx="2" ry="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 11h10M7 15h6" />
    </svg>
  ),
  notification: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500 group-hover:text-primary transition-colors"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  ),
  lock: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500 group-hover:text-primary transition-colors"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <rect width="14" height="10" x="5" y="11" rx="2" ry="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v4" />
    </svg>
  ),
  star: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500 group-hover:text-primary transition-colors"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M10 15l-5.878 3.09 1.123-6.545L.488 6.91l6.57-.955L10 0l2.942 5.955 6.57.955-4.757 4.635 1.123 6.546z" />
    </svg>
  ),
  blocked: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500 group-hover:text-primary transition-colors"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
  messenger: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500 group-hover:text-primary transition-colors"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
      />
    </svg>
  ),
  at: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500 group-hover:text-primary transition-colors"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="6" />
      <path d="M16.5 8a4.5 4.5 0 00-9 0v4" />
      <path d="M15 12v1a3 3 0 11-6 0v-3" />
    </svg>
  ),
  sharing: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500 group-hover:text-primary transition-colors"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path d="M15 8a3 3 0 11-6 0 3 3 0 016 0zm0 0v12m-6-6h12" />
    </svg>
  ),
}

const SettingSidebar = () => {
  const metaDiv = [
    { icon: icons.user, text: 'Personal details', to: '/setting/personal-details' },
    { icon: icons.shieldLock, text: 'Password and security', to: '/setting/password-security' },
    { icon: icons.advertisement, text: 'Ad Preferences', to: '/setting/ad-preferences' },
  ]

  const UserInstagram = [
    { icon: icons.user, text: 'Edit Profile', to: '/setting' },
    { icon: icons.notification, text: 'Notification', to: '/setting/notification' },
  ]

  const context = [
    { icon: icons.lock, text: 'Account Privacy', to: '/setting/account-privacy' },
    { icon: icons.star, text: 'Close Friends', to: '/setting/close-friends' },
    { icon: icons.blocked, text: 'Blocked', to: '/setting/blocked' },
    { icon: icons.notification, text: 'Hide Story and Privacy', to: '/setting/hide-story' },
  ]

  const interact = [
    { icon: icons.messenger, text: 'Message and Story Reply', to: '/setting/message-story-reply' },
    { icon: icons.at, text: 'Tags and Mention', to: '/setting/tags-mention' },
    { icon: icons.blocked, text: 'Comments', to: '/setting/comments' },
    { icon: icons.sharing, text: 'Sharing and Reuse', to: '/setting/sharing-reuse' },
    { icon: icons.sharing, text: 'Restricted Accounts', to: '/setting/restricted-accounts' },
    { icon: icons.sharing, text: 'Hidden Words', to: '/setting/hidden-words' },
  ]

  const renderLinks = (items) =>
    items.map((item, idx) => (
      <Link
        key={idx}
        to={item.to}
        className="group flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-2 rounded-lg hover:bg-primary hover:text-white transition cursor-pointer select-none"
        aria-label={item.text}
      >
        <span className="text-gray-400 group-hover:text-white flex-shrink-0">{item.icon}</span>
        <span className="font-medium text-sm lg:text-base">{item.text}</span>
      </Link>
    ))

  return (
    <div className="h-full w-full overflow-y-auto p-4 lg:p-6 bg-base-100 border-r border-base-300">
      <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-8 text-primary">Settings</h1>

      <section className="mb-6 lg:mb-8">
        <h2 className="text-base lg:text-lg font-semibold mb-2 flex items-center gap-2">
          <span>{icons.user}</span> Meta
        </h2>
        <h3 className="text-sm lg:text-base font-semibold mb-1">Account Center</h3>
        <p className="mb-3 lg:mb-4 text-xs lg:text-sm text-base-content/70">
          Manage your connected experience and account settings across Meta technologies
        </p>
        <div>{renderLinks(metaDiv)}</div>
        <p className="mt-2 lg:mt-3 text-xs lg:text-sm text-primary cursor-pointer hover:underline">
          See More in Accounts Center
        </p>
      </section>

      <section className="mb-6 lg:mb-8">
        <h2 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">Here you use Instagram</h2>
        <div>{renderLinks(UserInstagram)}</div>
      </section>

      <section className="mb-6 lg:mb-8">
        <h2 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">Who can see your context</h2>
        <div>{renderLinks(context)}</div>
      </section>

      <section className="mb-6 lg:mb-8">
        <h2 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">How others can interact with you</h2>
        <div>{renderLinks(interact)}</div>
      </section>
    </div>
  )
}

export default SettingSidebar
