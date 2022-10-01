import { Icon, IconProps } from '@chakra-ui/react';

interface Props {
  variant?: 'solid' | 'outline';
}

const ChatIcon = ({ variant = 'solid', ...props }: Props & IconProps) => {
  if (variant === 'solid') {
    return (
      <Icon viewBox="0 0 24 24" {...props}>
        <path
          d="M19.7 9.70599C19.7 5.84299 15.692 2.70099 10.765 2.70099C5.83798 2.70099 1.82898 5.84299 1.82898 9.70599C1.86208 10.7136 2.132 11.6993 2.61688 12.5833C3.10176 13.4672 3.78798 14.2246 4.61998 14.794V18.345C4.62022 18.4203 4.64272 18.4939 4.68465 18.5564C4.72658 18.619 4.78606 18.6678 4.85563 18.6966C4.9252 18.7255 5.00175 18.7331 5.07565 18.7186C5.14955 18.7041 5.21751 18.668 5.27098 18.615L7.62098 16.265C8.64226 16.5633 9.70104 16.7135 10.765 16.711C15.692 16.711 19.7 13.569 19.7 9.70599ZM5.22198 14.289C4.447 13.7934 3.80325 13.1178 3.34551 12.3199C2.88777 11.5219 2.62961 10.6252 2.59298 9.70599C2.59298 6.26499 6.25898 3.46399 10.765 3.46399C15.271 3.46399 18.937 6.26399 18.937 9.70599C18.937 13.148 15.271 15.948 10.765 15.948C9.70131 15.9505 8.64359 15.7893 7.62898 15.47C7.56259 15.4481 7.4914 15.4453 7.4235 15.4619C7.35561 15.4785 7.29375 15.5139 7.24498 15.564L5.38398 17.424V14.624C5.38726 14.5594 5.37423 14.4951 5.34609 14.4369C5.31795 14.3787 5.27561 14.3285 5.22298 14.291"
          fill="currentColor"
        />
        <path
          d="M5.22198 14.289C4.447 13.7934 3.80325 13.1178 3.34551 12.3199C2.88778 11.5219 2.62961 10.6252 2.59298 9.70599C2.59298 6.26499 6.25898 3.46399 10.765 3.46399C15.271 3.46399 18.937 6.26399 18.937 9.70599C18.937 13.148 15.271 15.948 10.765 15.948C9.70131 15.9505 8.64359 15.7893 7.62898 15.47C7.5626 15.4481 7.4914 15.4453 7.4235 15.4619C7.35561 15.4786 7.29375 15.5139 7.24498 15.564L5.38398 17.424V14.624C5.38726 14.5594 5.37423 14.4951 5.34609 14.4369C5.31795 14.3787 5.27561 14.3285 5.22298 14.291M19.7 9.70599C19.7 5.84299 15.692 2.70099 10.765 2.70099C5.83798 2.70099 1.82898 5.84299 1.82898 9.70599C1.86208 10.7136 2.132 11.6993 2.61688 12.5833C3.10176 13.4672 3.78798 14.2246 4.61998 14.794V18.345C4.62022 18.4203 4.64272 18.4939 4.68465 18.5564C4.72658 18.619 4.78606 18.6678 4.85563 18.6966C4.9252 18.7255 5.00175 18.7331 5.07565 18.7186C5.14955 18.7041 5.21751 18.668 5.27098 18.615L7.62098 16.265C8.64226 16.5633 9.70104 16.7135 10.765 16.711C15.692 16.711 19.7 13.569 19.7 9.70599V9.70599Z"
          stroke="currentColor"
          strokeWidth="0.25"
        />
        <path
          d="M21.479 14.048C21.4971 12.9527 21.1197 11.8875 20.416 11.048C19.926 12.6872 18.9761 14.1514 17.679 15.267C16.5157 16.1051 15.2162 16.7357 13.838 17.131C9.64802 17.995 8.03802 17.124 8.07202 17.131C8.10602 17.138 7.93402 17.152 8.07202 17.311C8.85045 18.1303 9.79232 18.7769 10.8366 19.2089C11.8809 19.641 13.0043 19.8488 14.134 19.819C14.9928 19.8206 15.8476 19.701 16.673 19.464L18.559 21.351C18.6305 21.4221 18.7272 21.462 18.828 21.462C18.8781 21.4621 18.9278 21.4523 18.9741 21.4333C19.0205 21.4142 19.0626 21.3861 19.0981 21.3507C19.1336 21.3153 19.1617 21.2733 19.1809 21.227C19.2001 21.1807 19.21 21.1311 19.21 21.081V18.226C19.8886 17.7552 20.4475 17.1322 20.842 16.4067C21.2365 15.6812 21.4557 14.8734 21.482 14.048"
          fill="currentColor"
        />
        <path
          d="M21.479 14.048C21.4971 12.9527 21.1197 11.8875 20.416 11.048C19.926 12.6872 18.9761 14.1514 17.679 15.267C16.5157 16.1051 15.2162 16.7357 13.838 17.131C9.64802 17.995 8.03802 17.124 8.07202 17.131C8.10602 17.138 7.93402 17.152 8.07202 17.311C8.85045 18.1303 9.79232 18.7769 10.8366 19.2089C11.8809 19.641 13.0043 19.8488 14.134 19.819C14.9928 19.8206 15.8476 19.701 16.673 19.464L18.559 21.351C18.6305 21.4221 18.7272 21.462 18.828 21.462C18.8781 21.4621 18.9278 21.4523 18.9741 21.4333C19.0205 21.4142 19.0626 21.3861 19.0981 21.3507C19.1336 21.3153 19.1617 21.2733 19.1809 21.227C19.2001 21.1807 19.21 21.1311 19.21 21.081V18.226C19.8886 17.7552 20.4475 17.1322 20.842 16.4067C21.2365 15.6812 21.4557 14.8734 21.482 14.048"
          stroke="currentColor"
          strokeWidth="0.25"
        />
        <path
          d="M4.25294 5.52L6.26494 4.201L8.44894 3.214L10.3999 2.914L12.8589 3.414L15.4289 4.464L18.1809 6.674L19.1569 8.874V11.212L17.8289 13.508L15.7489 15.24L12.6599 16.064H9.68194L7.24994 15.764L6.26494 17.001L4.96494 17.884V14.833L3.72894 13.508L2.67694 12.21L2.09094 10.389V8.674L2.86094 7.13L4.25294 5.52Z"
          fill="currentColor"
        />
      </Icon>
    );
  }
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        d="M19.699 9.70599C19.699 5.84299 15.691 2.70099 10.764 2.70099C5.837 2.70099 1.828 5.84299 1.828 9.70599C1.8611 10.7136 2.13102 11.6993 2.6159 12.5833C3.10079 13.4672 3.78701 14.2246 4.619 14.794V18.345C4.61924 18.4203 4.64174 18.4939 4.68367 18.5564C4.7256 18.619 4.78509 18.6678 4.85466 18.6966C4.92422 18.7255 5.00077 18.7331 5.07467 18.7186C5.14857 18.7041 5.21653 18.668 5.27 18.615L7.62 16.265C8.64128 16.5633 9.70007 16.7135 10.764 16.711C15.691 16.711 19.699 13.569 19.699 9.70599ZM5.221 14.289C4.44603 13.7934 3.80227 13.1178 3.34454 12.3199C2.8868 11.5219 2.62863 10.6252 2.592 9.70599C2.592 6.26499 6.258 3.46399 10.764 3.46399C15.27 3.46399 18.936 6.26399 18.936 9.70599C18.936 13.148 15.27 15.948 10.764 15.948C9.70034 15.9505 8.64262 15.7893 7.628 15.47C7.56162 15.4481 7.49042 15.4453 7.42253 15.4619C7.35463 15.4785 7.29277 15.5139 7.244 15.564L5.383 17.424V14.624C5.38628 14.5594 5.37325 14.4951 5.34511 14.4369C5.31697 14.3787 5.27464 14.3285 5.222 14.291"
        fill="currentColor"
      />
      <path
        d="M5.221 14.289C4.44603 13.7934 3.80227 13.1178 3.34454 12.3199C2.8868 11.5219 2.62863 10.6252 2.592 9.70599C2.592 6.26499 6.258 3.46399 10.764 3.46399C15.27 3.46399 18.936 6.26399 18.936 9.70599C18.936 13.148 15.27 15.948 10.764 15.948C9.70034 15.9505 8.64262 15.7893 7.628 15.47C7.56162 15.4481 7.49042 15.4453 7.42253 15.4619C7.35463 15.4786 7.29277 15.5139 7.244 15.564L5.383 17.424V14.624C5.38628 14.5594 5.37325 14.4951 5.34511 14.4369C5.31697 14.3787 5.27464 14.3285 5.222 14.291M19.699 9.70599C19.699 5.84299 15.691 2.70099 10.764 2.70099C5.837 2.70099 1.828 5.84299 1.828 9.70599C1.8611 10.7136 2.13102 11.6993 2.6159 12.5833C3.10079 13.4672 3.78701 14.2246 4.619 14.794V18.345C4.61924 18.4203 4.64174 18.4939 4.68367 18.5564C4.7256 18.619 4.78509 18.6678 4.85466 18.6966C4.92422 18.7255 5.00077 18.7331 5.07467 18.7186C5.14857 18.7041 5.21653 18.668 5.27 18.615L7.62 16.265C8.64128 16.5633 9.70007 16.7135 10.764 16.711C15.691 16.711 19.699 13.569 19.699 9.70599V9.70599Z"
        stroke="currentColor"
        strokeWidth="0.25"
      />
      <path
        d="M21.479 14.048C21.4676 12.9135 21.0633 11.818 20.335 10.948C20.2714 10.8694 20.1791 10.8192 20.0785 10.8086C19.9778 10.7981 19.8771 10.8279 19.7985 10.8915C19.7199 10.9552 19.6697 11.0474 19.6591 11.1481C19.6486 11.2487 19.6784 11.3494 19.742 11.428C20.3597 12.163 20.7038 13.0891 20.716 14.049C20.6861 14.7858 20.4786 15.5044 20.1113 16.1437C19.7439 16.7831 19.2275 17.3242 18.606 17.721C18.5561 17.7561 18.5154 17.8027 18.4872 17.8568C18.459 17.9109 18.4442 17.971 18.444 18.032V20.16L17.05 18.767C17.0007 18.7172 16.9385 18.682 16.8703 18.6654C16.8022 18.6488 16.7307 18.6514 16.664 18.673C15.8457 18.9316 14.9922 19.0622 14.134 19.06C13.1134 19.0901 12.0977 18.9058 11.1528 18.5189C10.2078 18.1321 9.3545 17.5512 8.64801 16.814C8.61652 16.772 8.57672 16.7369 8.53107 16.711C8.48543 16.6851 8.43493 16.6688 8.38273 16.6632C8.33052 16.6577 8.27773 16.663 8.22765 16.6787C8.17758 16.6945 8.13128 16.7204 8.09167 16.7548C8.05205 16.7893 8.01996 16.8315 7.9974 16.8789C7.97484 16.9263 7.96229 16.9779 7.96054 17.0304C7.95879 17.0828 7.96787 17.1351 7.98722 17.1839C8.00657 17.2327 8.03578 17.277 8.07301 17.314C8.85143 18.1333 9.7933 18.7799 10.8376 19.212C11.8819 19.644 13.0053 19.8519 14.135 19.822C14.9938 19.8236 15.8486 19.7041 16.674 19.467L18.559 21.351C18.6305 21.4221 18.7272 21.4621 18.828 21.462C18.8781 21.4621 18.9278 21.4524 18.9741 21.4333C19.0205 21.4142 19.0626 21.3862 19.0981 21.3508C19.1335 21.3154 19.1617 21.2733 19.1809 21.227C19.2001 21.1808 19.21 21.1311 19.21 21.081V18.226C19.8885 17.7553 20.4475 17.1322 20.842 16.4067C21.2365 15.6812 21.4557 14.8734 21.482 14.048"
        fill="currentColor"
      />
      <path
        d="M21.479 14.048C21.4676 12.9135 21.0633 11.818 20.335 10.948C20.2714 10.8694 20.1791 10.8192 20.0785 10.8086C19.9778 10.7981 19.8771 10.8279 19.7985 10.8915C19.7199 10.9552 19.6697 11.0474 19.6591 11.1481C19.6486 11.2487 19.6784 11.3494 19.742 11.428C20.3597 12.163 20.7038 13.0891 20.716 14.049C20.6861 14.7858 20.4786 15.5044 20.1113 16.1437C19.7439 16.7831 19.2275 17.3242 18.606 17.721C18.5561 17.7561 18.5154 17.8027 18.4872 17.8568C18.459 17.9109 18.4442 17.971 18.444 18.032V20.16L17.05 18.767C17.0007 18.7172 16.9385 18.682 16.8703 18.6654C16.8022 18.6488 16.7307 18.6514 16.664 18.673C15.8457 18.9316 14.9922 19.0622 14.134 19.06C13.1134 19.0901 12.0977 18.9058 11.1528 18.5189C10.2078 18.1321 9.3545 17.5512 8.64801 16.814C8.61652 16.772 8.57672 16.7369 8.53107 16.711C8.48543 16.685 8.43493 16.6688 8.38273 16.6632C8.33052 16.6577 8.27773 16.663 8.22765 16.6787C8.17758 16.6945 8.13128 16.7204 8.09167 16.7548C8.05205 16.7893 8.01996 16.8315 7.9974 16.8789C7.97484 16.9263 7.96229 16.9779 7.96054 17.0304C7.95879 17.0828 7.96787 17.1351 7.98722 17.1839C8.00657 17.2327 8.03578 17.277 8.07301 17.314C8.85143 18.1333 9.7933 18.7799 10.8376 19.212C11.8819 19.644 13.0053 19.8519 14.135 19.822C14.9938 19.8236 15.8486 19.7041 16.674 19.467L18.559 21.351C18.6305 21.4221 18.7272 21.4621 18.828 21.462C18.8781 21.4621 18.9278 21.4524 18.9741 21.4333C19.0205 21.4142 19.0626 21.3862 19.0981 21.3508C19.1335 21.3154 19.1617 21.2733 19.1809 21.227C19.2001 21.1808 19.21 21.1311 19.21 21.081V18.226C19.8885 17.7553 20.4475 17.1322 20.842 16.4067C21.2365 15.6812 21.4557 14.8734 21.482 14.048"
        stroke="currentColor"
        strokeWidth="0.25"
      />
    </Icon>
  );
};

export default ChatIcon;