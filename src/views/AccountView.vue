<script>
export default {
  name: 'AccountView'
}
</script>
<template>
  <div class="accountView">
    <h1 class="accountSectionTitle">Account Section</h1>
    <div class="accountListBox">
      <ul class="accountList">
        <li class="accountListItem">
          <router-link :to="{ name: 'user-info' }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="160"
              fill="currentColor"
              class="bi bi-person-lines-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"
              />
            </svg>
          </router-link>
        </li>
        <li class="accountListItem">
          <router-link :to="{ name: 'cart' }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="160"
              fill="currentColor"
              class="bi bi-cart carticon"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
          </router-link>
        </li>
        <li class="accountListItem">
          <router-link :to="{ name: 'order' }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="160"
              fill="currentColor"
              class="bi bi-card-checklist"
              viewBox="0 0 16 16"
            >
              <path
                d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
              />
              <path
                d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </router-link>
        </li>
        <li class="accountListItem">
          <router-link :to="{ name: 'update-password' }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="160"
              fill="currentColor"
              class="bi bi-key-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
              />
            </svg>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accountView{
  .accountSectionTitle{
    margin-top: 5rem;
    text-align: center;
  }
  .accountListBox{
    margin-top: 5rem;
    .accountList{
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      list-style-type: none;
      padding: 0;
      margin: 0;
      .accountListItem{
        width: 10rem;
        .accountListItem a svg{
          transition: all 0.1s linear;
        }
        .accountListItem a svg:hover{
          width: 192px !important;
          height: 192px !important;
        }
      }
    }
  }
}
@media(max-width:768px){
  .accountView{
    .accountSectionTitle{
      margin-top: 2.5rem;
      font-size: 2rem;
    }
    .accountListBox{
      margin-top: 2.5rem;
      .accountList{
        flex-wrap: wrap;
        .accountListItem{
          width: 50%;
          text-align: center;
          padding:1rem 0;
        }
      }
    }
  }
}
</style>
