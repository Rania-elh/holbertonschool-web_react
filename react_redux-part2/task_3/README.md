# Task 3

`fetchNotifications` ne conserve que les notifications non lues (`id`, `type`, `isRead`, `value`).
Le selecteur memoize `getFilteredNotifications` filtre cette liste selon `all`, `urgent` ou `default`.
Le tiroir bascule entre ces filtres avec les boutons urgent et default.
